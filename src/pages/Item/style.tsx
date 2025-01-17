import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils/const";

const useStyles = createUseStyles({
  name: {
    color: globalColors.white,
    fontSize: "24px",
    marginBottom: "25px",
    paddingTop: "30px",
    textAlign: "center",
  },
  toCataloge: {
    color: globalColors.white,
    fontSize: "18px",
    marginLeft: "22px",
    "&:hover": {
      color: globalColors.red,
      cursor: "pointer",
      transition: "all 0.3s",
    },
  },
  underName: {
    display: "flex",
    position: "relative",
    marginBottom: "12px",
  },

  root: {
    background: globalColors.darkBlack,
    width: "100%",
    maxWidth: "980px",
    margin: "0px auto",
    "& .ant-carousel .slick-dots": {
      zIndex: "1",
    },
  },
  symbol: {
    display: "block",
    color: globalColors.white,
    fontSize: "18px",
    position: "absolute",
    marginLeft: "1px",
  },
  content: {
    minHeight: "300px",
    width: "50%",
    paddingLeft: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "46px",
  },
  img: { width: "50%", height: "355px" },
  mainContainer: {
    display: "flex",
    paddingBottom: "20px",
    minHeight: "100px",
  },
  description: {
    color: globalColors.white,
    fontSize: "16px",
    marginTop: "23px",
  },
  pricePlusSelect: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    display: "block",
    background: globalColors.darkBlack,
    "&:hover": {
      cursor: "pointer",
      background: globalColors.red,
      transition: "all 0.3s",
    },
    color: globalColors.white,
    padding: "5px 10px 5px 10px",
    border: "1px solid white",
    borderRadius: "3px",
    width: "70%",
    fontSize: "16px",
    margin: "0px auto",
  },
  underDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  contentStyle: {
    height: "313px",
    width: "470px",
  },
  selectGram: {
    margin: "0px",
  },
  photo: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  cover: {
    display: "flex",
  },
  price: {
    color: globalColors.white,
    marginRight: "5px",
    marginBottom: "0px",
    fontSize: "16px",
  },
  purchaseType: {
    color: globalColors.white,
    marginBottom: "0px",
    fontSize: "16px",
  },
});
export default useStyles;
