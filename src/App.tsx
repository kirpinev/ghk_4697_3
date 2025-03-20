import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";
import bottom from "./assets/bottom.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);

    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={bottom} alt="Картинка" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
            style={{ marginTop: "-2.5rem" }}
          >
            Работа мечты — ближе, чем кажется
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">
            Поможем найти вакансии с условиями, которые подходят именно вам
          </Typography.Text>
        </div>

        <Gap size={16} />

        <Typography.Text view="primary-medium">
          Создали лучший сервис по поиску работы от проверенных партнёров
          Альфа-Банка
        </Typography.Text>

        <Gap size={16} />

        <div className={appSt.product}>
          <img src={image1} alt="" height={48} width={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-medium" weight="bold">
              Помощь с резюме
            </Typography.Text>
            <Typography.Text view="primary-small">
              Чтобы точно заинтересовать работодателя
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.product}>
          <img src={image2} alt="" height={48} width={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-medium" weight="bold">
              ИИ-тренажер
            </Typography.Text>
            <Typography.Text view="primary-small">
              Подготовка к первому этапу собеседования
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.product}>
          <img src={image2} alt="" height={48} width={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-medium" weight="bold">
              Быстрый ответ
            </Typography.Text>
            <Typography.Text view="primary-small">
              Работодатель свяжется в течение 5 минут
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" loading={loading} onClick={submit}>
          Загрузить резюме
        </ButtonMobile>
      </div>
    </>
  );
};
