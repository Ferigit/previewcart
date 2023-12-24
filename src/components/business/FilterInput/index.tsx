import React, { useState } from "react";
import { useRouter } from "next/router";
import { TextInput } from "@/src/components/common";

interface IProps {}

export const FilterInput: React.FC<IProps> = ({}) => {
  const router = useRouter();

  const [filterQuery, setFilterQuery] = useState(router?.query?.filter || "");

  const handleFilterChange = (newFilter: string) => {
    router.push({ pathname: router.pathname, query: { filter: newFilter } });
    setFilterQuery(newFilter);
  };

  return (
    <section className="w-full">
      <TextInput
        name="filter"
        id="filter"
        type="text"
        placeholder="Filter project by name"
        customControl={{
          value: filterQuery,
          onChange: (e) => handleFilterChange(e.target.value),
        }}
        className={{ container: "!min-h-0 !w-full", input: "!w-full border-2" }}
      />
    </section>
  );
};
