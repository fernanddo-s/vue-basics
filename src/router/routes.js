import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ControleDeProdutos from '@/views/ControleDeProdutos'
import ControleDeClientes from '@/views/ControleDeClientes'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        title: 'Tela Login',
        meta: { requiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
        title: 'Dashboard',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes',
        meta: { requiredAuth: true }
    }
];

export default routes;