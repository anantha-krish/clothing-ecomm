import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDirectorySections
} from "../../redux/directory/directory.reselect";
import { RootState } from "../../redux/store";
import {
  IDirectoryState
} from "../../types/state/IDirectoryState";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ sections }: IReduxProps) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherMenuProps }) => (
        <MenuItem key={id} {...otherMenuProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector<RootState, IDirectoryState>({
  sections: selectDirectorySections,
});

const connector = connect(mapStateToProps);
type IReduxProps = ConnectedProps<typeof connector>;
export default connector(Directory);
