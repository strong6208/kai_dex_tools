import React, { useState } from "react"
import "dayjs/locale/ja"

import { AdapterDayjs, Box, DatePicker, LocalizationProvider, TextField } from "src/UILibrary"

export const DateType: React.FC = () => {
  const [date, setDate] = useState<string | null>()

  return (
    <Box sx={{ display: "flex", justifyContent: { md: "flex-start", xs: "center" } }}>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DatePicker
            views={["month", "year"]}
            value={date}
            onChange={(value) => setDate(value)}
            renderInput={(params) => <TextField fullWidth sx={{ width: "160px" }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DatePicker
            views={["month", "day", "year"]}
            value={date}
            onChange={(value) => setDate(value)}
            renderInput={(params) => <TextField fullWidth sx={{ width: "160px" }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}
