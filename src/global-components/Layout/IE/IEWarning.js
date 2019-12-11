// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
import IEModal from "./IEModal";
// =========================

const Text = styled.p`
 ${flexUnit(2, 20, 22, "vw", "font-size")}
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function IEWarning() {
  const isIE = () => {
    if (window !== undefined) {
      return /*@cc_on!@*/ false || !!document.documentMode;
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(isIE);

  const handleChange = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <IEModal modalIsOpen={modalIsOpen} handleChange={handleChange}>
        <Text>
          Internet Explorer word sinds april 2017 niet meer ondersteund. Gebruik
          a.u.b. een moderne browser om deze site te bezoeken.
        </Text>
      </IEModal>
    </div>
  );
}
