import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useProducts} from "../../hooks/useProducts.ts";
import {IProducts} from "../../shared/interfaces/IProducts.ts";
import {useTranslation} from "react-i18next";
import {ILanguageSupported} from "../../shared/interfaces/ILanguage.ts";
import './DetailView.scss';
import LeftIcon from "../../assets/icons/left.svg";
import {SuperLoader} from "../../components/atoms/SuperLoader/SuperLoader.tsx";
import {SuperActionButtons} from "../../components/atoms/SuperActionButtons/SuperActionButtons.tsx";

export const DetailView = () => {
  const {i18n, t} = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProducts | null>(null);
  const {getProductDetail, isLoading} = useProducts();

  const getProductDetailById = async () => {
    if (!id) {
      navigate('/');
      return;
    }
    try {
      const product = await getProductDetail(id);
      setProduct(product);
    } catch (error) {
      console.error('getProductDetailById', error);
    }
  }

  const handleBack = () => {
    navigate('/');
  }

  useEffect(() => {
    getProductDetailById();
  }, []);

  return (
    <div className="detail">
      {isLoading && (<SuperLoader/>)}
      {product && (
        <>
          <div className="detail__container">
            <div className="detail__container--back">
              <div onClick={handleBack} className="detail__container--back-action">
                <img className="paginator__icon" src={LeftIcon} alt="left"/>
                <label className="detail__container--back-text">{t('back')}</label>
              </div>
            </div>
            <img className="detail__row--image" src={product.image} alt="product"/>
            <div className="detail__container--info">
              <label className="detail__row">
                <span className="detail__row--title">ID: </span>
                <span className="detail__row--text">
                  {product?.id}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('name')}: </span>
                <span className="detail__row--text">
                  {product?.name[i18n.language as ILanguageSupported]}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('description')}: </span>
                <span className="detail__row--text">
                  {product?.description[i18n.language as ILanguageSupported]}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('price')}: </span>
                <span className="detail__row--text">
                  {product?.price}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('disk')}: </span>
                <span className="detail__row--text">
                  {product?.data.disk}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('cpu')}: </span>
                <span className="detail__row--text">
                  {product?.data.cpu}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('gpu')}: </span>
                <span className="detail__row--text">
                  {product?.data.gpu}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('ram')}: </span>
                <span className="detail__row--text">
                  {product?.data.ram}
                </span>
              </label>
              <label className="detail__row">
                <span className="detail__row--title">{t('display')}: </span>
                <span className="detail__row--text">
                  {product?.data.display}
                </span>
              </label>
              <div className="detail__row detail__row--actions">
                <SuperActionButtons productId={product.id}/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
