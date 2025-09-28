import { Typography } from "@mui/material"
import { render, screen } from "@testing-library/react"

describe("Typography", () => {
    it("should render text correctly", () => {
        render(<Typography variant="h4">Dashboard</Typography>);
        expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
    })
})