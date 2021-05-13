import { renderHook } from '@testing-library/react-hooks'
import { useSearch } from './useSearch';


describe('useSearch: Hook', () => {
  test('should return empty string', () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current[0].searchValue).toBe('')
  });
});
