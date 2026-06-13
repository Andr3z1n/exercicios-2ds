import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

import FormularioPersonagem from "/src/components/FormularioPersonagem";

describe("FormularioPersonagem", () => {
  window.alert = vi.fn();

  test("renderiza inputs", () => {
    render(<FormularioPersonagem />);

    expect(
      screen.getByPlaceholderText(/seu nome/i)
    ).toBeTruthy();

    expect(
      screen.getByPlaceholderText(/sua mensagem/i)
    ).toBeTruthy();
  });

  test("envia formulário", async () => {
    render(<FormularioPersonagem />);

    const nome = screen.getByPlaceholderText(/seu nome/i);
    const mensagem = screen.getByPlaceholderText(/sua mensagem/i);
    const botao = screen.getByText(/enviar/i);

    await userEvent.type(nome, "Ana");
    await userEvent.type(mensagem, "Olá");

    await userEvent.click(botao);

    expect(window.alert).toHaveBeenCalled();
  });
});