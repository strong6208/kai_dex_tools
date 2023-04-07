import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import { Box, Typography } from "src/UILibrary"

//import { PAGE_SIZE } from "src/constants/common"
import { FieldDefinition, MealTable } from "src/components/mealTable"
import { MOCK_MEAL_DATA } from "./mockmeal"
import { Meal } from "src/types/meal"
import { MealDetailModal } from "./components/mealDetail"
import { MOCK_MEAL_DETAIL_DATA } from "./components/mockMedalDetail"

const mealData: Meal[] = MOCK_MEAL_DATA

const fields: FieldDefinition<Meal>[] = [
  {
    attribute: "date",
    label: "meal.date",
    width: 136,
  },
  {
    attribute: "breakfast",
    label: "meal.breakfast",
    widget: () => (
      <Box>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[0].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[1].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[2].menu_name}
        </Typography.Action>
      </Box>
    ),
  },
  {
    attribute: "lunch",
    label: "meal.lunch",
    widget: () => (
      <Box>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[0].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[1].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[2].menu_name}
        </Typography.Action>
      </Box>
    ),
  },
  {
    attribute: "dinner_a",
    label: "meal.dinner_a",
    widget: () => (
      <Box>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[0].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[1].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[2].menu_name}
        </Typography.Action>
      </Box>
    ),
  },
  {
    attribute: "dinner_b",
    label: "meal.dinner_b",
    widget: () => (
      <Box>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[0].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[1].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[2].menu_name}
        </Typography.Action>
      </Box>
    ),
  },
  {
    attribute: "dinner_c",
    label: "meal.dinner_c",
    widget: () => (
      <Box>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[0].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[1].menu_name}
        </Typography.Action>
        <Typography.Action
          sx={{
            textAlign: "start",
            fontSize: "18px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {MOCK_MEAL_DETAIL_DATA[2].menu_name}
        </Typography.Action>
      </Box>
    ),
  },
  {
    attribute: "other",
    label: "user_list.other",
  },
]

export const MealList: React.FC = () => {
  const { t } = useTranslation()
  const [mealDetailModalOpen, setMealDetailModalOpen] = useState<boolean>(false)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1098px",
          width: "auto",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "1rem",
            width: "100%",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "0.9375rem",
                ml: "1.25rem",
                gap: "1.125rem",
              }}
            >
              <Typography.Detail>{t("application.display_count")}</Typography.Detail>
            </Box>
          </Box>
        </Box>
        <MealTable fields={fields} content={mealData} onDetail={setMealDetailModalOpen} />
      </Box>
      <MealDetailModal open={mealDetailModalOpen} handleMealDetailOpen={setMealDetailModalOpen} />
    </Box>
  )
}
