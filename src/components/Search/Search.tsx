import styles from './Search.module.scss';
import { FC, useRef, FormEvent, FormEventHandler } from "react";
import { ReactComponent as SearchIcon } from "@/assets/icon-search.svg"
import { Button } from "@/components/Button";

interface SearchProps {
  hasError?: boolean
  onSubmitHandler: (text: string) => void
}

export const Search: FC<SearchProps> = ({
                                          hasError,
                                          onSubmitHandler
                                        }) => {
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = searchRef.current?.value || ''
    if (text) {
      onSubmitHandler(text)
      if (searchRef.current) {
        searchRef.current.value = ''
      }
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      autoComplete="off"
    >
      <div className={styles.search}>

        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          ref={searchRef}
          id="search"
          type="text" className={styles.textField}
          name="username"
          placeholder="Enter username"
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
