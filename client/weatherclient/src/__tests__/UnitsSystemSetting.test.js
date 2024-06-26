import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import { useSettingsStore } from "../store/settingsStore"
import UnitsSystemSetting from "../components/settings/UnitsSystemSetting"

jest.mock('../store/settingsStore', () => ({
    useSettingsStore: jest.fn(),
  }))

  describe("UnitsSystemSetting", () => {
    let store

  test("toggle units in store to metric", () => {
    store = {
        units: "Imperial",
        changeUnits: jest.fn(),
    }
    useSettingsStore.mockReturnValue(store)
    render(<UnitsSystemSetting />)
    const toggleSwitch = screen.getByRole('checkbox')
    expect(toggleSwitch).toBeChecked()
    const toggleTitleImperial = screen.getByText("Imperial is on")
    expect(toggleTitleImperial).toBeInTheDocument()
    fireEvent.click(toggleSwitch)
    expect(store.changeUnits).toHaveBeenCalledWith("Metric")
    const toggleTitleMetric = screen.getByText("Metric is on")
    expect(toggleTitleMetric).toBeInTheDocument()
  })

  test("toggle units in store to imperial", () => {
    store = {
        units: "Metric",
        changeUnits: jest.fn(),
    }
    useSettingsStore.mockReturnValue(store)
    render(<UnitsSystemSetting />)
    const toggleSwitch = screen.getByRole('checkbox')
    expect(toggleSwitch).not.toBeChecked()
    const toggleTitleMetric = screen.getByText("Metric is on")
    expect(toggleTitleMetric).toBeInTheDocument()
    fireEvent.click(toggleSwitch)
    expect(store.changeUnits).toHaveBeenCalledWith("Imperial")
    const toggleTitleImperial = screen.getByText("Imperial is on")
    expect(toggleTitleImperial).toBeInTheDocument()
  })
})