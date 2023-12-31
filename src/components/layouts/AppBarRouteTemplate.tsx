import { AppBarRouteTemplatePropsType } from '@models/components/layouts/appBarRouteTemplate'
import { Route } from 'react-router-dom'

import AppBarTemplate from './AppBarTemplate'

const AppBarRouteTemplate = ({
  path,
  variant,
  label,
  hasNav,
  rightChildren,
  rightChildrenIcon,
  isLabelAlignCenter,
  customHandler,
  beforeUrl,
  element,
}: AppBarRouteTemplatePropsType) => {
  return (
    <Route
      path={path}
      element={
        <AppBarTemplate
          label={label}
          hasNav={hasNav!}
          rightChildren={rightChildren!}
          rightChildrenIcon={rightChildrenIcon}
          isLabelAlignCenter={isLabelAlignCenter}
          customHandler={customHandler}
          beforeUrl={beforeUrl}
          variant={variant!}
        >
          {element}
        </AppBarTemplate>
      }
    />
  )
}

export default AppBarRouteTemplate
