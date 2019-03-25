<template>
<Div class="stats">
    <div class="row">
        <div class="header-col left-radius col-6">
            Реализованно акций, шт
        </div>
        <div class="header-col right-radius col-6">
            Сумма, руб
        </div>
        <div class="col-6">
            650 000
        </div>
        <div class="col-6">
            6 017 125,00
        </div>
    </div>

    <div class="row">
        <div class="header-col col-6">
            Выплачено вознаграждений, руб
        </div>
        <div class="col-6">
            2 130 272,45
        </div>
    </div>

        <div class="row">
        <div class="header-col col-6">
            Вознаграждений к выплате, руб
        </div>
        <div class="col-6">
            187 215,45
        </div>
    </div>

        <div class="row">
        <div class="header-col bottom-left-radius col-6">
            Дата выплаты
        </div>
        <div class="col-6">
            01 февраля 2019
        </div>
    </div>
</Div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.stats {
    width: 500px;
    max-width: 100%;
    text-align: center;
    margin: auto;
    font-size: 16px;
}
.header-col {
    background: grey;
    color: white !important;
}
.left-radius {
    border-top-left-radius: 7px;
}
.right-radius {
    border-top-right-radius: 7px;
}
.bottom-left-radius {
    border-bottom-left-radius: 7px;
}
</style>
