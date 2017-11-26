export default {
    props: {
        columns: {
            type: Array,
            default () {
                return [];
            }
        },
        data: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            currentColumns: [], //用于对数据的排序，而不是直接在原数据上操作
            currentData: []
        }
    },
    methods: {
        makeColumns() {
            this.currentColumns = this.columns.maps((col, index) => {
                col._sortType = 'normal';
                col._index = index;
                return col;
            })
        },
        makeData() {
            this.currentData = this.data.map((row,index) => {
                row._index = index;
                return row;
            })
        },
        handleSortByAsc() {
            const key = this.currentColumns[index].key;
            this.currentColumns.forEach((col) => {
                col._sortType = 'normal',
                this.currentColumns[index]._sortType = 'asc';
                this.currentData.sort((a,b) => {
                    return a[key] > b[key] ? 1 : -1;
                })
            })
        },
        handleSortByDesc() {
            const key = this.currentColumns[index].key;
            this.currentColumns.forEach((col) => {
                col._sortType = 'normal',
                    this.currentColumns[index]._sortType = 'asc';
                this.currentData.sort((a, b) => {
                    return a[key] < b[key] ? 1 : -1;
                })
            })
        }
    },
    mounted() {
        this.makeColumns();
        this.makeData();
    },
    render(h){
        //列的排序
        const ths = [];
        this.currentColumns.forEach((col,index) => {
            if(col.sortable) {
                ths.push(h('th',[
                    h('span',col.title),
                    h('a',{
                        class: {
                            on: col._sortType === 'asc'
                        },
                        on: {
                            click: () => {
                                this.handleSortByAsc(index)
                            }
                        }
                    },'向上的箭头'),
                    h('a', {
                        class: {
                            on: col._sortType === 'asc'
                        },
                        on: {
                            click: () => {
                                this.handleSortByDesc(index)
                            }
                        }
                    }, '向下的箭头')
                ]))
            }else{
                ths.push(h('th',col.title))
            }
        })
        //行的排序
        const trs = [];
        this.currentData.forEach((row) => {
            const tds = [];
            this.currentColumns.forEach((cell) => {
                tds.push(h('td',row[cell.key]))
            })
            trs.push(h('tr',tds));
        })

        return h('table',[
            h('thead',[
                h('tr',ths)
            ]),
            h('tbody',[
                h('tr',trs)
            ])
        ])
    },
    watch:{
        data() {
            this.makeData();
            const sortedColumn = this.currentColumns.filter((col) => {
                return col._sortType !== 'normal';
            });
            if(sortedColumn.length > 0) {
                if(sortedColumn[0]._sortType === 'asc') {
                    this.handleSortByAsc(sortedColumn[0]._index);
                }else{
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        }
    }
}