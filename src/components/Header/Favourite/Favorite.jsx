import { useContext } from 'react';
import heartIcon from '../../../assets/heart.svg';
import { FavoriteContext } from '../../../context';
const Favorite = ({ onShow }) => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="p-2   hover:bg-black/50 cursor-pointer flex gap-1 items-center rounded-md transition-all " onClick={onShow}>
      <img src={heartIcon} alt="favoriteIcon" />
      <p className="text-white">{`${favorites.length}`}</p>
    </div>
  )
}

export default Favorite;
