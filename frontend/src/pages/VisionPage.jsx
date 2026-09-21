import Vision from "../components/project/Vision";
import { Helmet } from "react-helmet-async";

const VisionPage = () => {
  return (
    <>
      <Helmet>
        <title>Vision | Copper Studio</title>
        <meta
          name="description"
          content="Explore Copper Studio's vision and approach to creating meaningful digital experiences."
        />
        <meta
  property="og:image"
  content="https://res.cloudinary.com/tpxo8m6a/image/upload/v1789970465/ChatGPT_Image_Sep_21_2026_11_29_49_AM.png"
/>
<meta property="og:site_name" content="Copper Studio" />
      </Helmet>

      <Vision />
    </>
  );
};

export default VisionPage;