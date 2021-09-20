import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const TestLayout = ({ children }: IProps) => <>Layout {children}</>;

export default TestLayout;
