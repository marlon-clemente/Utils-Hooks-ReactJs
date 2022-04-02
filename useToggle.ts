const useToggle = (value1 = true, value2 = false) => {
  const [state, setState] = useState(value1);

  const toggle = useCallback(() => {
    setState((prev: boolean) => (prev === value1 ? value2 : value1));
  });

  return [state, toggle];
};
