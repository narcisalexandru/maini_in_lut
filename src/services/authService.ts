import type { IUser } from '../interfaces/IUser'

class AuthService {
  private tokenKey = 'token'
  private userKey = 'user'

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  setUser(user: IUser): void {
    // Verificăm dacă user-ul este un obiect valid înainte de a-l salva
    if (user && user.email && user.name) {
      localStorage.setItem(this.userKey, JSON.stringify(user))
    } else {
      console.error('Invalid user data:', user)
    }
  }

  getUser(): IUser | null {
    const userString = localStorage.getItem(this.userKey)
    if (userString === null || userString === 'undefined') {
      return null
    }
    try {
      return JSON.parse(userString)
    } catch (error) {
      console.error('Error parsing user data:', error)
      return null
    }
  }

  clearSession(): void {
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem(this.userKey)
  }

  async loginWithGoogle(idToken: string): Promise<IUser | null> {
    try {
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      })

      if (!response.ok) throw new Error('Login failed')

      const data = await response.json()

      // Verificăm și salvăm token-ul și datele utilizatorului
      if (data.token && data.email && data.name) {
        this.setToken(data.token)
        const user: IUser = {
          email: data.email,
          name: data.name,
          picture: data.picture,
        }
        this.setUser(user)
        return user
      } else {
        console.error('Invalid user data from backend:', data)
        return null
      }
    } catch (error) {
      console.error('Error during login:', error)
      return null
    }
  }
}

export const authService = new AuthService()
