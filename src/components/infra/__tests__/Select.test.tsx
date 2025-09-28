import { render, screen } from "@testing-library/react";
import { Select } from "../Select";
import userEvent from "@testing-library/user-event";

describe("Select", () => {
    const mockOptions = [
        { label: "Opção 1", value: "1" },
        { label: "Opção 2", value: "2" },
    ];

    const mockProps = {
        label: 'Selecione uma Opção',
        options: mockOptions,
        value: '1',
        onChange: jest.fn(),
        inputProps: {
            'data-testid': 'mui-select-input',
        },
    };

    it("should render select options", () => {
        render(<Select {...mockProps} />)
        expect(screen.getByLabelText(/selecione/i)).toBeInTheDocument()
    })

    // TO DO: ajustar teste para pegar o valor do input
    it("should select an option", async () => {
        const user = userEvent.setup();
        const mockChange = jest.fn();

        render(<Select {...mockProps} onChange={mockChange} />)
        const select = screen.getByLabelText(/selecione/i);
        await user.click(select);
        await user.click(screen.getByRole("option", { name: /opção 2/i }));

        expect(screen.getByDisplayValue(/opção 2/i)).toBeInTheDocument();
    })
})