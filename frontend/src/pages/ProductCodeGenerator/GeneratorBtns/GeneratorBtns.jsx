import React from "react";
import Button from "../../../compoments/Button/Button";

const GeneratorBtns = ({
  productType,
  generateCode,
  generateCodeCosmetics,
  sendToGoogleSheets,
  sendToGoogleSheetsOnlyEbay,
  resetForm,
  copyHtmlToShop,
  copyShortDescToShop,
  copyHtmlToShopAndShortDesc,
  copyHtmlToBl,
  copyHtmlToEbayDe,
  copyHtmlToEbayEn,
  copyHtmlToEbayFr,
  copyHtmlToEbayIt,
  htmlToShop,
  htmlToBl,
  style,
  handleTranslate,
  skipTranslation,
  translateSkipped,
  isTranslating,
  isTranslated,
  isCodeGenerated,
  isSendingToSheets,
  isDataSentToSheets,
  translationError, // Nowa właściwość do obsługi błędów tłumaczenia
}) => {
  return (
    <div className={style.generator__btns}>
      {/* Krok 1: Przyciski tłumaczenia */}

      {/* Krok 2: Przycisk generowania kodu (pojawia się po tłumaczeniu lub pominięciu tłumaczenia) */}

      <Button
        onClick={
          productType === "cosmetics" ? generateCodeCosmetics : generateCode
        }
        className={style.generator__generateBtn}
      >
        Generuj kod
      </Button>


      {/* Informacja o wygenerowaniu kodu */}
      {isCodeGenerated && (
        <div className={style.generator__codeGeneratedInfo}>
          <span>Kod został poprawnie wygenerowany!!! ✅</span>
          <div className={style.generator__successIcon}>
            {/* Ikona zielonej "okejki" */}
            <div className={style.generator__checkmark}></div>
          </div>
        </div>
      )}

      <Button onClick={copyHtmlToBl} className={style.generator__copyBtn}>
        Kod HTML dla BaseLinkera
      </Button>









      {/* Przycisk resetowania - dostępny zawsze, ale podświetlony po zakończeniu procesu */}
      <div
        className={`${style.generator__resetBtnContainer} ${isDataSentToSheets ? style.generator__resetBtnHighlighted : ""
          }`}
      >
        <Button onClick={resetForm} className={style.generator__resetBtn}>
          Resetuj formularz
        </Button>
      </div>
    </div>
  );
};

export default GeneratorBtns;
