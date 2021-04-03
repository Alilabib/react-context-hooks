import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class BookList extends Component {
//     render() { 
//         return(
//             <ThemeContext.Consumer>{(context)=>{
//                 const {isLightTheme, light, dark} = context;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                     <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
//                         <ul>
//                             <li style={{background:theme.ui}}>the way of kings </li>
//                             <li style={{background:theme.ui}}>the name of the wind </li>
//                             <li style={{background:theme.ui}}>the final  empire  </li>
//                         </ul>
//                     </div>
//                 );
//             }}
//             </ThemeContext.Consumer>
//         )
//     }
// }

const BookList = ()=>{
    const {isLightTheme,light,dark} =  useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext);
    return(
        <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
        <ul>
            {
                books.map((book)=>{
                   return(<li style={{background:theme.ui}} key={book.id}>{book.title}</li>) 
                })
            }
            {/* <li style={{background:theme.ui}}>the way of kings </li>
            <li style={{background:theme.ui}}>the name of the wind </li>
            <li style={{background:theme.ui}}>the final  empire  </li> */}
        </ul>
    </div>
    );
}
 
export default BookList;