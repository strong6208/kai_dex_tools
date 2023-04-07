import React from "react"
import { useTranslation } from "react-i18next"

import { Typography } from "src/UILibrary"
import { FieldDefinition } from "src/components/mealTable"
import { Modal } from "src/components/modal"

import { MealDetail } from "src/types/mealDetail"
import { MOCK_MEAL_DETAIL_DATA } from "./mockMedalDetail"
import { MealDetailTable } from "src/components/mealDetailTable"

const mealDetailData: MealDetail[] = MOCK_MEAL_DETAIL_DATA

interface ApplicationModalProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  handleMealDetailOpen: (open: boolean) => void
}

const fields: FieldDefinition<MealDetail>[] = [
  {
    attribute: "menu_name",
    label: "meal.menu_name",
    width: 200,
  },
  {
    attribute: "energy",
    label: "meal.energy",
  },
  {
    attribute: "protein",
    label: "meal.protein",
  },
  {
    attribute: "lipid",
    label: "meal.lipid",
  },
  {
    attribute: "salt",
    label: "meal.salt",
  },
]

export const MealDetailModal: React.FC<ApplicationModalProps> = ({
  open,
  handleMealDetailOpen,
}) => {
  const { t } = useTranslation()

  const handleClose = () => {
    handleMealDetailOpen(false)
  }

  return (
    <Modal handleClose={handleClose} open={open}>
      <Typography.Heading sx={{ fontWeight: 500, textAlign: "center" }}>
        {t("application.application")}
      </Typography.Heading>
      <MealDetailTable fields={fields} content={mealDetailData} />
    </Modal>
  )
}
