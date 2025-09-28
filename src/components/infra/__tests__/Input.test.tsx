import { render, screen } from "@testing-library/react"
import { Input } from "../Input"
import userEvent from "@testing-library/user-event"


describe("Input", () => {
    it("render input with label", () => {
        render(<Input label="Nome" />)
        expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    })

    it("should allow text input", async () => {
        const user = userEvent.setup();
        render(<Input label="Nome" />)
        const input = screen.getByLabelText(/nome/i);
        await user.type(input, "Clarissa");
        expect(input).toHaveValue("Clarissa");
    })
})