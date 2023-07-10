import './category-item.styles.scss'

//receieve the entire object as a prop. destructure the object

//appending dynamic css by passing it as a style object. The style field takes the css property you want to modify (backgroundImage)
// and the value you want to pass it (url).
const CategoryItem = ({category}) =>{
    const { imageUrl, title } = category;
    return(
        <div className="category-container">
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
        </div>     
      </div>
    )
}

export default CategoryItem;