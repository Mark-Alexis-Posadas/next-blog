import { ChildrenType } from "../_types/children_type";

export default function Wrapper({ children }: ChildrenType) {
  return <div className="max-w-[1100px] m-auto">{children}</div>;
}
