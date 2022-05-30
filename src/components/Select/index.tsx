import React, { FC } from "react";
import { Select as SelectAnt } from "antd";

import useStyles from "./style";

const { Option } = SelectAnt;

interface ISelect {
  optionArray: any;
  selectValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select: FC<ISelect> = (props) => {
  const classes = useStyles();

  const { selectValue, setValue, optionArray } = props;

  const getSelect = (v: string) => {
    setValue(v);
  };

  return (
    <div className={classes.root}>
      <SelectAnt
        value={selectValue}
        style={{ width: 120 }}
        onChange={getSelect}
      >
        {optionArray.map((item: any) => (
          <Option value={item.key}>{item.name}</Option>
        ))}
      </SelectAnt>
    </div>
  );
};
export { Select };