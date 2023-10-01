// MUI
import { Button } from '@mui/material';

// Assets
import { ProductCardStyle } from './product-card.style';

function ProductCard({ imageSrc }) {
  return (
    <ProductCardStyle>
      <div id="image_wrapper">
        <img src={imageSrc} alt="product" />
      </div>
      <h3 className="mt-7 text-xl font-bold">نام محصول</h3>

      <p className="mb-5 mt-8 border-b border-gray-300 pb-5 dark:border-gray-600 dark:text-textGray">
        لورم ایپسوم متن نامفهوم از صنعت چاپ و با سادگی نامفهوم است در ستون سادگی
        نامفهوم و سطرآنچنان که لازم است
      </p>

      <Button
        className="w-full !font-vazir"
        variant="contained"
        color="primaryBlue"
      >
        فعالسازی
      </Button>
    </ProductCardStyle>
  );
}

export default ProductCard;
