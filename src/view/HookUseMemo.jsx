import { WithoutUseMemo } from "../components/WithoutUseMemo";
import { WithUseMemo } from "../components/WithUseMemo";

export const HookUseMemo = () => {
  return (
    <>
      <h1>Use Memo</h1>
      <WithoutUseMemo />
      <WithUseMemo />
    </>
  );
};
