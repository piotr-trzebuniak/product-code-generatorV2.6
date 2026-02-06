import React, { useState } from "react";
import style from "./SupplementsForm.module.scss";
import BasicInfo from "../../../compoments/BasicInfo/BasicInfo";
import SpecialFeatures from "../../../compoments/SpecialFeatures/SpecialFeatures";
import RwsCalc from "../../../compoments/RwsCalc/RwsCalc";
import Table from "../../../compoments/Table/Table";
import Button from "../../../compoments/Button/Button";
import { TableEnd } from "../../../compoments/Tiptap/TableEnd";
import { LongDescription } from "../../../compoments/Tiptap/LongDescription";
import { Ingredients } from "../../../compoments/Tiptap/Ingredients";
import { HowToUse } from "../../../compoments/Tiptap/HowToUse";
import { Contraindications } from "../../../compoments/Tiptap/Contraindications";
import { AdditionalInformation } from "../../../compoments/Tiptap/AdditionalInformation";
import SelectIngredient from "../../../compoments/SelectIngredient/SelectIngredient";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../../../redux/productSlice";
import { Storage } from "../../../compoments/Tiptap/Storage";
import { ShortDescription } from "../../../compoments/Tiptap/ShortDescription";

const SupplementsForm = ({ resetKey }) => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.product);

  const handleAddIngredient = () => {
    dispatch(addIngredient());
  };

  const handleRemoveIngredient = () => {
    dispatch(removeIngredient());
  };

  return (
    <div className={style.supplements}>
      <div className={style.supplements__grid}>
        <BasicInfo />
        <SpecialFeatures />
      </div>
      <ShortDescription onReset={resetKey} />
      <div>
        <RwsCalc />
        <Table />
        <Button onClick={handleAddIngredient}>Dodaj składnik</Button>
        <Button
          className={style.supplements__deleteBtn}
          onClick={handleRemoveIngredient}
        >
          Usuń składnik
        </Button>
        <TableEnd onReset={resetKey} />
      </div>

      <div className={style.supplements__grid2}>
        <LongDescription onReset={resetKey} />
        <Ingredients onReset={resetKey} />
        <HowToUse onReset={resetKey} />
        <Contraindications onReset={resetKey} />
        <AdditionalInformation onReset={resetKey} />
        <Storage onReset={resetKey} />
        {/* <div className={style.supplements__select}>
          <h4>Lista producentów</h4>
          <SelectProducers />
        </div>
        <div className={style.supplements__select}>
          <h4>Lista podmiotów odpowiedzialnych</h4>
          <SelectResponsibleEntity />
        </div> */}
        {/* <div className={style.supplements__select}>
          <h4>Lista składników</h4>
          <SelectIngredient />
          <Bulletpoints initialContent={productData.bulletpoints} />
        </div> */}
        {/* <Producer initialContent={productData.producer.bl} />
        <ResponsibleEntity initialContent={productData.responsibleEntity.bl} /> */}

      </div>
    </div>
  );
};

export default SupplementsForm;
