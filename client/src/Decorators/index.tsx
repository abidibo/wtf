import React from 'react'
import Loader from '../Components/Loader'

type WithLoaderRenderArg = {
  isLoading: boolean,
  props: any
}

export type WithLoaderReturnType = React.ReactElement<WithLoaderRenderArg,any>

/**
 * With Loader decorator:
 * Returns the given component (Element of FC) or a loader basing upon a given evaluated condition.
 *
 * @example 
 * return withLoader(<div>LOL</div>, isFetching)
 *
 * @example
 * return withLoader(() => <div>{some.fetch.dependant.prop}</div>, isFetching)
 *
 */
function withLoader (Component: React.FC | JSX.Element, isLoading: true | false): WithLoaderReturnType
function withLoader (Component: React.FC, isLoading?: undefined): WithLoaderReturnType
function withLoader(Component: any, isLoading: boolean) {
  return isLoading ? <Loader /> : (typeof Component === 'function' ? Component() : Component)
}

export { withLoader }

/**
 * With Loader HOC decorator:
 * Returns a functional component with an isLoading prop then when true makes it return a Loader.
 *
 * @example 
 * const MyComp = withLoaderHOC(Comp)
 * return <MyComp isLoading={false} text={'miao'} />
 *
 */
function withLoaderHOC (Component: React.FC): React.FC<any & { isLoading: boolean }> {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Loader /> : <Component {...props} />
  }
}

export { withLoaderHOC }
