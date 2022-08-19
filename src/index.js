import css from "./style.css";
import dropDownMenu from './modules/drop-down-menu'

const root = document.getElementById('content')

const items = [
    'something1', 'something2', 'something3'
]

root.append(dropDownMenu(items));
