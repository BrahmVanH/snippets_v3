import { GitHubBanner, Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider, { DocumentTitleHandler, UnsavedChangesNotifier } from '@refinedev/nextjs-router';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import { Layout } from '@components/Layout';
import dataProvider from '@refinedev/simple-rest';
import '@styles/global.css';

const API_URL = 'https://fakestoreapi.com';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
	const renderComponent = () => {
		if (Component.noLayout) {
			return <Component {...pageProps} />;
		}

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	};

	return (
		<>
			<GitHubBanner />
			<RefineKbarProvider>
				<DevtoolsProvider>
					<Refine
						resources={[{ name: 'products', list: '/' }]}
						routerProvider={routerProvider}
						dataProvider={dataProvider(API_URL)}
						options={{
							syncWithLocation: true,
							warnWhenUnsavedChanges: true,
							projectId: 'CzVBDy-inFhZH-IH8MX9',
						}}>
						{renderComponent()}
						<RefineKbar />
						<UnsavedChangesNotifier />
						<DocumentTitleHandler />
					</Refine>
					<DevtoolsPanel />
				</DevtoolsProvider>
			</RefineKbarProvider>
		</>
	);
}

export default MyApp;
