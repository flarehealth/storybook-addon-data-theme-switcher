import type { Theme } from "./Theme";

export interface ThemeConfig {
  clearable?: boolean;
  dataAttribute?: string;
  default?: string; // gets added via globalTypes (globals["dataTheme"])
  list: Theme[];
  onChange?: (themeName: Theme | undefined) => void;
}
