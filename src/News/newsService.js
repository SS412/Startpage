import Api from '../API/api';

    export function getTechArticles() {
        return Api.get('?category=technology&country=us&page=1&pageSize=3').then(response => response.data);
    }

    export function getSportsArticles() {
        return Api.get('?category=sports&country=us&page=1&pageSize=3').then(response => response.data);
    }

    export function getScienceArticles() {
        return Api.get('?category=science&country=us&page=1&pageSize=3').then(response => response.data);
    }






