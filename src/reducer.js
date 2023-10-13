export const initialState = {

    basket: [],
    totalBasket: {Exito:0, Olimpica:0, Jumbo:0, Carulla:0},
    barato:"",
    disponibilidad: {},
    products: [],
    categories: [],
    tiendas:["Olimpica", "Exito", "Jumbo", "Carulla"],
    promociones:[],
    favoritos:[],
    user: null,
    openSidebar: false,
    selectedProduct: null,
    selectedCategoria: null,
    openSearch: false,
    // selectedFiltroTiendas: []
    selectedFiltroTiendas: null,
    lower_basket: {
        Exito: {
            productos: [],
            total: 0
        },
        Olimpica: {
            productos: [],
            total: 0
        },
        Jumbo:{
            productos: [],
            total: 0
        },
        Carulla: {
            productos: [],
            total: 0
        }
      }
    
}

export const actionTypes = {
    SELECT_CATEGORIA: "SELECT_CATEGORIA",
    ADD_TO_BASKET: "ADD_TO_BASKET",
    PUT_TOTAL_BASKET:"PUT_TOTAL_BASKET",
    ADD_BARATO: "ADD_BARATO",
    CLEAN_TOTAL_BASKET: "CLEAN_TOTAL_BASKET",
    ADD_DISPONIBILIDAD: "ADD_DISPONIBILIDAD",
    PUT_THE_BASKET: "PUT_THE_BASKET",
    EMPTY_BASKET: "EMPTY_BASKET",
    ADD_PRODUCT : "ADD_PRODUCT",
    LOAD_PRODUCTS: "LOAD_PRODUCTS",
    LOAD_CATEGORIES: "LOAD_CATEGORIES",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    ADD_FAVORITE: "ADD_FAVORITE",
    OPEN_SIDEBAR: "OPEN_SIDEBAR",
    SELECT_PRODUCTS: "SELECT_PRODUCTS",
    OPEN_SEARCH: "OPEN_SEARCH",
    ADD_SELECTED_TIENDAS: "ADD_SELECTED_TIENDAS",
    LOAD_LOWER_BASKET: "LOAD_LOWER_BASKET"
}

export const getBasketTotal = (basket) =>{
    return(basket?.reduce((acc , item) => item.price + acc, 0 ))
}

const reducer = (state, action) =>{

    switch(action.type){

        case "LOAD_LOWER_BASKET":
        return{
            ...state,
            lower_basket: action.item
        }

        case "ADD_SELECTED_TIENDAS":
        return{
            ...state,
            selectedFiltroTiendas: action.tiendas
        }

        case "OPEN_SEARCH":
        return{
            ...state,
            openSearch: action.open
        }

        case "SELECT_CATEGORIA":
        return{
            ...state,
            selectedCategoria: action.item
        }

        case "OPEN_SIDEBAR":
        return {
            ...state,
            openSidebar: action.open
        }

        case "ADD_FAVORITE":
        return{
            ...state,
            favoritos: [...state.favoritos, action.item]
        }

        case "SET_USER":
        return{
            ...state,
            user: action.user
        }

        case "ADD_TO_BASKET":
        
        return {
            ...state,
            basket: [...state.basket, action.item]
        }

        case "PUT_THE_BASKET":
        return{
            ...state,
            basket: action.item
        }

        case "ADD_BARATO":
        let min = Infinity;
        let key;
        state.tiendas.forEach(m => {
            if(min > action.item[m] &&  action.item[m] !== 0 ){
                min = action.item[m]
                key = m
            }
        });
        return{
            ...state,
            barato: key
        }

        case "PUT_TOTAL_BASKET":
        return{
            ...state,
            totalBasket: action.item
        }

        case "ADD_DISPONIBILIDAD":
        
        return{
            ...state,
            disponibilidad: action.item
        }

        case "REMOVE_FAVORITE":
        const ind =  state.favoritos.findIndex((product) =>product.id === action.id);
        let newFavorites = [...state.favoritos]

        if(ind >= 0){
            newFavorites.splice(ind, 1)
        }else{
            console.log("No se puede eliminar el item")
        }

        return {
            ...state,
            favoritos: newFavorites
        }

        case "REMOVE_ITEM":
        const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
        let newBasket = [...state.basket];
        if (index >=0){
            newBasket.splice(index,1)
        }else{
            console.log("No se puede eliminar el item")
        }
        return{
            ...state,
            basket: newBasket,
        }

        case "EMPTY_BASKET":
        return{
            ...state,
            basket: action.basket
        }
        case "ADD_PRODUCT":
        return{
            ...state,
            products:[...state.products, action.item],
        }
        case "LOAD_CATEGORIES":
        return{
            ...state,
            categories: action.item
        }

        case "LOAD_PRODUCTS":
        
        return{
            ...state,
            products: action.products
        }

        case "SELECT_PRODUCTS":
        return{
            ...state,
            selectedProduct: action.item
        }

        default:
            return state
    }
}
export default reducer 