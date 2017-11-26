<template>
  <div>
      <v-table :columns='columns' :data='data'></v-table>
      <button @click="handleAddData">添加数据</button>
  </div>
</template>
<script>
import vTable from './table';
export default {
    data(){
        return {
            columns:[
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age',
                    sortable: true
                },
                {
                    title: '出生日期',
                    key: 'birthday',
                    sortable: true
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data:[
                {
                    name: '王晓明',
                    age: 18,
                    birthday: '1999-02-21'
                },
                {
                    name: '王晓明',
                    age: 18,
                    birthday: '1999-02-21'
                }
            ]
        }
    },
    methods:{
        handleAddData() {
            this.data.push({
                name: 'djf',
                age: 19,
                birthday: '1998-05-30',
                address: '北京市东城区东直门'
            });
        }
    },
  components: {
      vTable
  }
}
</script>
<style lang="scss" scoped>
    table {
        width:100%;
        margin-bottom: 24px;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #e9e9e9;
    }
    table th {
        background: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
        white-space: nowrap;
    }
    table td,
    table th {
        padding: 8px 16px;
        border: 1px solid #e9e9e9;
        text-align: left;
    }
    table th a{
        display: inline-block;
        margin: 0 4px;
        cursor: pointer;
    }
    table th a.on{
        color: #3399ff;
    }
    table th a:hover {
        color: #3399ff;
    }
</style>