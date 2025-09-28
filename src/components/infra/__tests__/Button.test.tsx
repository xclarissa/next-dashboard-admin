import { Button } from "../Button"
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("Button", () => {
    it("should render the right label", () => {
        render(<Button>Clique aqui</Button>);
        const buttonElement = screen.getByText(/clique aqui/i);
        expect(buttonElement).toBeInTheDocument();
    })

    it("should call function on click", async () => {
        const user = userEvent.setup()
        const onClick = jest.fn();

        render(<Button onClick={onClick}>Salvar</Button>);
        await user.click(screen.getByRole("button", { name: /salvar/i }));
        
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})