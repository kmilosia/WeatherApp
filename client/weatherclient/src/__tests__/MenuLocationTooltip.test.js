import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import useLocationStore from "../store/locationStore";
import MenuLocationTooltip from "../components/menu/MenuLocationTooltip";

describe('MenuLocationTooltip', () => {
    beforeEach(() => {
        useLocationStore.setState({ defaultLocation: 'Test Location' })
        jest.clearAllMocks()
    })

    test('clears default location when button is clicked and set default button not rendered', () => {
      render( <MenuLocationTooltip removeLocation={() => {}} setDefaultLocation={() => {}} setShowTooltip={() => {}} isDefault={true} isCurrent={false} />)
      expect(useLocationStore.getState().defaultLocation).toBe("Test Location")
      const button = screen.getByText('Remove default location')
      fireEvent.click(button)
      expect(useLocationStore.getState().defaultLocation).toBeNull()
      const setDefaultbutton = screen.queryByText('Set as default location')
      expect(setDefaultbutton).not.toBeInTheDocument()

    })
    test('button invisible when isDefault false', () => {
        render( <MenuLocationTooltip removeLocation={() => {}} setDefaultLocation={() => {}} setShowTooltip={() => {}} isDefault={false} isCurrent={false} />)
        const button = screen.queryByText('Remove default location')
        expect(button).not.toBeInTheDocument()
    })
    test('button invisible when isDefault false', () => {
        render( <MenuLocationTooltip removeLocation={() => {}} setDefaultLocation={() => {}} setShowTooltip={() => {}} isDefault={false} isCurrent={false} />)
        const button = screen.queryByText('Remove default location')
        expect(button).not.toBeInTheDocument()
    })
  });