
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/CounterSlice";
import RandomListSlice from "../features/random/RandomListSlice";
import DarkLightSlice from "../features/darkLight/DarkLightSlice";
import ChangeInterfaceSlice from "../features/changeInterface/ChangeInterfaceSlice";
import MenuSidebar from "../features/menuSideBar/MenuSlice";
import LanguageSlice from "../features/languageSelector/LanguageSlice";
import FavoritesList from "../features/FavoritesList/FavoritesListSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        random: RandomListSlice,
        darklight: DarkLightSlice,
        changeInterface: ChangeInterfaceSlice,
        menuSidebar: MenuSidebar,
        language: LanguageSlice,
        favorites: FavoritesList,

    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;