import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { DataContext } from '../../context/DataContext'
import { HomeView } from './HomeView'
import { useProducts } from '../../hooks/useProducts'
import { RoleEnum } from '../../shared/enums/role.enum'
import '@testing-library/jest-dom'

jest.mock('../../hooks/useProducts')
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => ['products'] }),
  t: () => jest.fn(),
}))

const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>

describe('HomeView', () => {
  beforeEach(() => {
    mockUseProducts.mockReturnValue({
      createProduct: jest.fn(),
      editProduct: jest.fn(),
      getProductDetail: jest.fn(),
      removeProductById: jest.fn(),
      searchProducts: jest.fn(),
      getAllProducts: jest.fn(),
      isLoading: false,
    })
  })

  it('does not render create product button for non-admin users', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            setAuth: jest.fn(),
            auth: {
              isLogged: true,
              isGuest: false,
              user: {
                role: RoleEnum.USER,
                id: '',
                email: '',
                name: '',
                token: '',
              },
            },
          }}
        >
          <DataContext.Provider
            value={{
              setData: jest.fn(),
              data: {
                featureFlags: {
                  INTERNATIONALIZATION: true,
                  EDIT_PRODUCT: true,
                  REMOVE_PRODUCT: true,
                  CREATE_PRODUCT: true,
                },
                modal: {
                  isOpen: false,
                  title: '',
                  message: '',
                  textCancel: '',
                  textConfirm: '',
                  onConfirm: () => {},
                  onCancel: () => {},
                  children: null,
                },
                products: [],
              },
            }}
          >
            <HomeView />
          </DataContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    )

    expect(screen.queryByText('createProduct')).not.toBeInTheDocument()
  })
})
