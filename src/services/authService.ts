import jwt_decode from 'jwt-decode'
import type { JwtPayload } from 'jwt-decode'
import type { IUser } from '../interfaces/IUser'

class AuthService {
  private tokenKey = 'token'

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  getUser(): IUser | null {
    const token = this.getToken()
    if (!token) return null

    try {
      const decoded = jwt_decode<JwtPayload & { name?: string; picture?: string }>(token)
      return {
        email: decoded.sub || '',
        name: decoded.name || 'Unknown',
        picture: decoded.picture || '',
      }
    } catch (error) {
      console.error('Invalid token:', error)
      return null
    }
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey)
  }

  async loginWithGoogle(idToken: string): Promise<{ token: string } | null> {
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
      this.setToken(data.token)
      return data
    } catch (error) {
      console.error('Error during login:', error)
      return null
    }
  }
}

export const authService = new AuthService()
