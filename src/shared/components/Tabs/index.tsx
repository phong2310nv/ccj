import { BoxProps, Tabs as MuiTabs, TabsProps as MuiTabsProps, Tab, TabProps } from '@mui/material';
import { TabWrapperStyled } from './Tabs.styles';
type TabsProps = {
  wrapperProps?: BoxProps;
  options: TabProps[];
} & MuiTabsProps;
function Tabs({ wrapperProps, options, ...tabsProps }: TabsProps) {
  return (
    <TabWrapperStyled {...wrapperProps}>
      <MuiTabs scrollButtons={false} {...tabsProps}>
        {options.map((option, index) => (
          <Tab {...option} key={option.value || index} disabled={option.disabled} />
        ))}
      </MuiTabs>
    </TabWrapperStyled>
  );
}

export default Tabs;
