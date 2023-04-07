import React from "react"
import "dayjs/locale/ja"

import { AdapterDayjs, Box, DatePicker, LocalizationProvider, TextField } from "src/UILibrary"

interface DateTypeProps {
  mealDate: string
  setMealDate?: Function
}

export const DateType: React.FC<DateTypeProps> = ({ mealDate, setMealDate }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: { md: "flex-start", xs: "center" } }}>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DatePicker
            views={["month", "year"]}
            value={mealDate || ""}
            onChange={(value) => !!setMealDate && setMealDate(value)}
            renderInput={(params) => <TextField fullWidth sx={{ width: "160px" }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DatePicker
            views={["month", "day", "year"]}
            value={mealDate || ""}
            onChange={(value) => !!setMealDate && setMealDate(value)}
            renderInput={(params) => <TextField fullWidth sx={{ width: "160px" }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}
