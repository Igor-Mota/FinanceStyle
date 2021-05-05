export default function (theme) {
    switch (theme) {
        case 'dark':
            const colors = {
                backGround: '#050A30',
                text: '#c4c4c4',
                iconActive: '#fff',
                iconInactive: '#ffffff80',
            }
            return colors
            break

        case 'blue':
            const colorss = {
                backGround: '#0191AE',
                text: '#c4c4c4',
                iconActive: '#fff',
                iconInactive: '#ffffff80',
            }
            return colorss
            break
        case 'purple':
            const colorssss = {
                backGround: '#7702A6',
                text: '#c4c4c4',
                iconActive: '#fff',
                iconInactive: '#ffffff80',
            }
            return colorssss
            break
        case 'ligth':
            const colorsssss = {
                backGround: '#9ACFDD',
                text: '#000000',
                iconActive: '#000',
                iconInactive: '#00000080',
            }
            return colorsssss
            break

        default:
            const colorsss = {
                backGround: '#050A30',
                text: '#c4c4c4',
            }
            return colorsss
            break
    }
}
