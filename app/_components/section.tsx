import { ChildrenType } from "../_types/children_type";
export default function Section({ children }: ChildrenType) {
  return <section className="py-5">{children}</section>;
}
