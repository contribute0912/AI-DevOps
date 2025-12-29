import unittest
from app import app

class BasicTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_home(self):
        rv = self.app.get('/')
        self.assertEqual(rv.status_code, 200)
        self.assertIn(b'Hello from Python Flask!', rv.data)

    def test_health(self):
        rv = self.app.get('/health')
        self.assertEqual(rv.status_code, 200)
        self.assertIn(b'healthy', rv.data)

if __name__ == '__main__':
    unittest.main()
