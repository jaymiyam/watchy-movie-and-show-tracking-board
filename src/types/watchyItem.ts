export type ID = string;
export type Category = 'Movie' | 'Drama' | 'Anime' | 'Show' | 'Others';
export type Country = 'US' | 'KR' | 'JP' | 'TW' | 'Other';
export type Genre =
  | 'Action'
  | 'Adventure'
  | 'Comedy'
  | 'Documentary'
  | 'Fantasy'
  | 'Fiction'
  | 'Horror'
  | 'Mystery'
  | 'Romance'
  | 'Sports'
  | 'Thriller'
  | 'Variety'
  | 'Others';

export interface WatchyItem {
  id: string;
  title: string;
  category: Category;
  country: Country;
  month:
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';
  genre: Genre;
  isUpdating: boolean;
  updateWeekday:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
    | '';
  isFinished: boolean;
  rating: number;
}
