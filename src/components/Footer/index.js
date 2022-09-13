import StaspiLogo from '../../assets/svg/staspi.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="grid content-center mx-auto pt-[130px] pb-[130px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="ml-[30px] mb-[35px]">
            <div className="ml-[-30px]">
              <img src={StaspiLogo} />
            </div>
            <div>
              <p className="text-staspi-dark-blue text-[30px] font-medium">
                Better Experience
              </p>
              <p className="text-staspi-dark-blue text-[30px] font-medium">
                Better Satisfaction
              </p>
            </div>
          </div>
          <div className="ml-[30px]  mb-[35px]">
            <p className="text-title">Thông tin liên hệ</p>
            <div>
              <p className="text-information">
                Địa chỉ: 25A Đặng Thai Mai, P.7, Quận Phú Nhuận, TP.HCM
              </p>
              <p className="text-information">Hotline: 0816411445</p>
              <p className="text-information">Email: staspi.com@gmail.com</p>
            </div>
          </div>
          <div className="ml-[30px]  mb-[35px]">
            <p className="text-title">Dịch vụ</p>
            <div>
              <p className="text-information">Marketing tổng thể </p>
              <p className="text-information"> Thiết kế website </p>
              <p className="text-information">Quản lý tài khoản Amazon </p>
              <p className="text-information"> Đào tạo Marketing</p>
            </div>
          </div>
          <div className="ml-[30px]  mb-[35px]">
            <p className="text-title">Đào tạo </p>
            <div>
              <p className="text-information">Amazon </p>
              <p className="text-information"> Marketing tổng thể </p>
              <p className="text-information">Quản lý tài khoản Amazon </p>
              <p className="text-information"> Đào tạo Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[102px] bg-staspi-dark-blue grid justify-items-center items-center">
        <p className="text-center text-staspi-orange font-medium">
          Staspi © 2022 ABC
        </p>
      </div>
    </footer>
  );
};
export default Footer;
